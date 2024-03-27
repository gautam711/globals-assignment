import { StatusCodes } from "http-status-codes";
import { Response, Request } from "express";
import { ImageService } from "../../service/image.service";

export interface QueryParams {
  skip: string;
  limit: string;
  count: string;
}

export async function imagesController(
  _req: Request<any, any, any, QueryParams>,
  res: Response
) {
  try {
    const images = await ImageService.getImages(_req.query);

    res.status(StatusCodes.OK).json({
      success: true,
      data: images,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error,
    });
  }
}
