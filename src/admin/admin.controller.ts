import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { SaveSpecialDto, SaveSpecialItemsDto, SaveCombinedSpecialItemsDto, UpdateSpecialDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('/savespecial')
    async saveSpecial(@Body() saveSpecialDto: SaveSpecialDto) {
        return this.adminService.saveSpecial(saveSpecialDto);
    }

    @Get('/getspecialid/:special_name')
    async getSpecialID(@Param('special_name') specialName: string) {
        return this.adminService.getSpecialID(specialName);
    }

    @Post('/savespecialitems')
    async saveSpecialItems(@Body() saveSpecialItemsDto: SaveSpecialItemsDto) {
        return this.adminService.saveSpecialItems(saveSpecialItemsDto);
    }

    @Post('/savecombinedspecialitems')
    async saveCombinedSpecialItems(@Body() saveCombinedSpecialItemsDto: SaveCombinedSpecialItemsDto) {
        return this.adminService.saveCombinedSpecialItems(saveCombinedSpecialItemsDto);
    }

    // @Patch('/updatespecial/:special_id')
    // async updateSpecial(@Param('special_id') specialId: number, @Body() updateSpecialDto: UpdateSpecialDto) {
    //     return this.adminService.updateSpecial(specialId, updateSpecialDto);
    // }
}