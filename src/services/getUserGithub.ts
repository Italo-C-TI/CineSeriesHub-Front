import { UnexpectedError } from "../errors";
import { request } from "../http/request";
import { GithubUserType } from "../types&enums/github.types";
import { HttpMethods, HttpStatusCodes } from "../types&enums/http.types";
import { apiUsersGithubUrl } from "../urls/github";

export const getGithubUser = async (userNick:string) => {

    const response  = await request<GithubUserType>({
    url: `${apiUsersGithubUrl}${userNick}`,
    method: HttpMethods.GET,
    });    

  switch (response.status) {
    case HttpStatusCodes.OK:
      return response.body;
    default:
      throw new UnexpectedError();
  }
};
