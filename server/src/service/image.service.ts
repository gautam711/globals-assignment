import ImageModel from "../models/images";

export interface IGetImages {
  skip: string;
  limit: string;
  count: string;
}

export class ImageService {
  public static async getImages(params: IGetImages) {
    const { skip, limit, count } = params;

    try {
      let query = ImageModel.find({});

      if (skip && limit) {
        query = query
          .skip(parseInt(skip) * parseInt(limit))
          .limit(parseInt(limit));
      }

      const images = await query.exec();

      if (count === "true") {
        const totalCount = await ImageModel.countDocuments({});
        return { count: totalCount };
      } else {
        return images;
      }
    } catch (error) {
      throw new Error("Internal server error");
    }
  }

  public static async postImage(data: any) {
    try {
      const image = await ImageModel.create(data);
      console.log({ image });
      return image;
    } catch (error) {
      throw new Error(error);
    }
  }
}
