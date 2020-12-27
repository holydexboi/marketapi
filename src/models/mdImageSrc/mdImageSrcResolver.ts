import { sequelize } from "../../sequelize";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { MdImageSrc } from "./mdImageSrc";
import { MdItem } from "../mdItem/mdItem";
import { MdImageSrcInput } from "./mdImageSrcType";

@Resolver()
export class MdImageSrcResolver {
  private readonly mdImageSrcRepository = sequelize.getRepository(MdImageSrc);
  private readonly mdItemRepository = sequelize.getRepository(MdItem);

  @Query(() => MdImageSrc)
  async getImage(@Arg("id") id: number): Promise<MdImageSrc | null> {
    return await this.mdImageSrcRepository.findByPk(id, {
      include: [this.mdItemRepository],
    });
  }

  @Query(() => [MdImageSrc])
  async getImages(): Promise<MdImageSrc[] | null> {
    return await this.mdImageSrcRepository.findAll({
      include: [this.mdItemRepository],
    });
  }

  @Mutation(() => MdImageSrc)
  async createAImage(
    @Arg("user") imageInput: MdImageSrcInput
  ): Promise<MdImageSrc | null> {
    const newImage = await (
      await this.mdImageSrcRepository.create(imageInput)
    ).save();
    console.log("New image created", newImage);
    return newImage;
  }

  @Mutation(() => Int)
  async updateUImage(
    @Arg("image") imageInput: MdImageSrcInput,
    @Arg("imageId") imageId: string
  ): Promise<number | null> {
    const result = await this.mdImageSrcRepository.update(imageInput, {
      where: { id: imageId },
    });
    console.log("Result ===>", result);
    return result[0];
  }
}
