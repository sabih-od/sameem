import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CommunityJoin } from 'src/community-joins/entities/community-join.entity';
import { In } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @Inject('COMMUNITY_JOIN_REPOSITORY')
    private joinRepo: Repository<CommunityJoin>,
  ) {}

  async findFriendsByUserId(userId: number) {
    const userJoins = await this.joinRepo.find({
      where: { user: { id: userId } },
      relations: ['community'],
    });

    const communityIds = userJoins.map((cj) => cj.community.id);

    if (communityIds.length === 0) return [];


    const allJoins = await this.joinRepo.find({
    where: {
        community: { id: In(communityIds) },
    },
    relations: ['user', 'community'],
    });


    const friendsMap = new Map();

    for (const join of allJoins) {
      const friend = join.user;
      if (friend.id !== userId && !friendsMap.has(friend.id)) {
        friendsMap.set(friend.id, friend);
      }
    }

    return Array.from(friendsMap.values());
  }
}
