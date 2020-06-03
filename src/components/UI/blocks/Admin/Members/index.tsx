import React from "react";
import Table from "~/components/UI/atoms/Table";

interface Props<T> {
    members: T[];
}

const headers = ["학번", "이름", "연락처", "생일", "학적", "등급"];

const Select = ({ value }: { value: number }) => {
    const arr = [];
    arr[value - 2] = true;

    const [isManager, isMember, requireApproval] = [...arr];
    return (
        <select>
            <option value="2" selected={isManager}>
                관리자
            </option>
            <option value="3" selected={isMember}>
                TCP멤버
            </option>
            <option value="4" selected={requireApproval}>
                승인대기
            </option>
        </select>
    );
};

const Members = (props: Props<string[]>) => {
    const columns = props.members.map(el => {
        const [membership] = el.splice(-1);
        return [...el.slice(0), <Select value={+membership} />];
    });

    return <Table headers={headers} columns={columns} />;
};

export default Members;
