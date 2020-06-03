import API from "./utils";
import { User } from "~/types";

type Members = {
    users: (User & { membershipId: string })[];
};

export const getMembers = () =>
    API.get<Members>(`admin/users`)
        .then(({ data: { users } }) => users)
        .then(users =>
            users.map(
                ({
                    grade,
                    username,
                    phone,
                    birth,
                    schoolRegister,
                    membershipId,
                }): string[] => [
                    grade,
                    username,
                    phone,
                    birth,
                    schoolRegister,
                    membershipId,
                ],
            ),
        );
