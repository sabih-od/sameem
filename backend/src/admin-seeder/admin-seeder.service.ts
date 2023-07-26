import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserSeed } from "../users/interface";

@Injectable()
export class AdminSeederService {
    constructor(private readonly userService: UsersService) {}

    async seed(): Promise<void> { // Add the async keyword here
        const usersToCreate: UserSeed[] = [
            { first_name: 'super', last_name: 'admin', email: 'adminsameem@example.com', phone: '123456789', password: '12345678', role_id: '1' },
            // Add more user data as needed
        ];

        for (const userData of usersToCreate) {
            let email = userData.email;
            let user = await this.userService.findOneByEmail(email);
            if (user.error === 'User Not Found') {
                console.log('here');
                this.userService.createUser(userData);
            }
        }
    }
}
