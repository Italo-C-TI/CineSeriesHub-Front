import { useEffect, useState } from "react";
import { getGithubUser } from "../services";
import { GithubUserType } from "../types&enums/github.types";

export const Footer = () => {
  const [userGithub, setUserGithub] = useState<GithubUserType>();



  useEffect(() => {
    const getProjectCreatorGithub = async () => {
      try {
        const response = await getGithubUser("Italo-C-TI");
        setUserGithub(response);
      } catch (error) {
      console.error("Erro ao buscar dados do usuário do GitHub:", error);
    }
    };
    getProjectCreatorGithub();
  }, []);

  return (
    <footer className="p-4 text-center">
      <div className="text-fuchsia-400	">
        Site Criado Por
        <br />
        {userGithub && (
          <>
          <a
            href={userGithub.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            >
            {userGithub.login}
            </a>
            <a
            href={userGithub.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            >
          <img
            src={userGithub.avatar_url}
            alt={`${userGithub.login}'s avatar`}
            className="w-10 h-10 mx-auto mt-2 rounded-full"
          />
          </a>
          </>

        )}  
      </div>
    </footer>
  );
};
