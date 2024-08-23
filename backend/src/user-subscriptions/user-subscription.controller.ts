import { Controller, Get, Post, Body, Param, Put, Delete, Query, Headers } from '@nestjs/common';
import { UserSubscriptionService } from './user-subscription.service';
import { ApiHeader, ApiQuery } from '@nestjs/swagger';



@Controller('user-subscription')
export class UserSubscriptionController {
    constructor(private readonly subscriptionService: UserSubscriptionService) { }

    // @Post()
    // async create(@Body() createSubscriptionDto: CreateSubscriptionDto) {

    //     let res = await this.subscriptionService.create(createSubscriptionDto);
    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : 'Subscription created successfully!',
    //         data: res.error ? [] : res,
    //     }
    // }

    @Get()
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiHeader({ name: 'lang', required: false })
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number, @Headers('lang') lang?: number) {
        let res = await this.subscriptionService.findAll(page, limit);
        return {
            success: true,
            message: '',
            ...res
        }
    }


    // @Get('/get-subscriptions')
    // async getAll() {
    //     let res = await this.subscriptionService.getfindAll();
    //     return {
    //         success: true,
    //         message: '',
    //         ...res
    //     }
    // }

    // @Get(':id')
    // async findOne(@Param('id') id: number) {
    //     console.log("Find");

    //     let res = await this.subscriptionService.findOne(+id);

    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : '',
    //         data: res.error ? [] : res,
    //     }
    // }

    // @Post(':id')
    // async update(
    //     @Param('id') id: number,
    //     @Body() updateSubscriptionDto: UpdateSubscriptionDto,
    // ) {

    //     let subscription = await this.subscriptionService.findOne(+id);
    //     if (subscription.error) {
    //         return {
    //             success: false,
    //             message: subscription.error,
    //             data: [],
    //         }
    //     }
    //     let res = await this.subscriptionService.update(+id, updateSubscriptionDto);

    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : 'Subscription updated successfully!',
    //         data: res.error ? [] : res,
    //     }
    // }

    // @Delete(':id')
    // async remove(@Param('id') id: string) {
    //     let find = await this.subscriptionService.findOne(+id);
    //     console.log("Delete", find)

    //     if (find.error) {
    //         return {
    //             success: false,
    //             message: find.error,
    //             data: [],
    //         }
    //     }

    //     let res = await this.subscriptionService.remove(+id);

    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : 'Subscription deleted successfully!',
    //         data: res.error ? [] : res,
    //     }
    // }


    // @Post(':id')
    // async update(
    //     @Param('id') id: number,
    //     @Body() updateSubscriptionDto: UpdateSubscriptionDto,
    // ) {

    //     let subscription = await this.subscriptionService.findOne(+id);
    //     if (subscription.error) {
    //         return {
    //             success: false,
    //             message: subscription.error,
    //             data: [],
    //         }
    //     }
    //     let res = await this.subscriptionService.update(+id, updateSubscriptionDto);

    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : 'Subscription updated successfully!',
    //         data: res.error ? [] : res,
    //     }
    // }







}
