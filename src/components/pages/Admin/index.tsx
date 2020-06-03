import React from "react";
import Template from "./Template";
import useGetMembers from "./useGetMembers";

const Admin = () => {
    const {
        state: { members },
    } = useGetMembers();

    return <Template members={members} />;
};

export default Admin;
