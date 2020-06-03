import React from "react";
import Members from "~/components/UI/blocks/Admin/Members";
import BaseTemplate from "~/components/pages/templates/Base";
import { Category } from "~/types";

interface Props {
    members: string[][];
}

const categories: Category[] = [
    {
        id: 1,
        name: "팀원 관리",
        to: "/admin/member_privileges",
    },
];

const Admin = (props: Props) => {
    return (
        <BaseTemplate categories={categories}>
            <Members members={props.members} />
        </BaseTemplate>
    );
};

export default Admin;
