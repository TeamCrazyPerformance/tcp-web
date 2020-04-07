import React, { ImgHTMLAttributes } from "react";
import StyledLink from "@atoms/StyledLink";
import "./style.scss";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    /**
     * 이미지 설명
     */
    src: string;
    /**
     * 깃헙 유저 네임
     */
    github: string;
}

export const Avatar = (props: AvatarProps) => {
    const { src, github, ...rest } = props;

    const alt = props.alt || github + "_profile";

    return (
        <StyledLink href={`https://github.com/${github}`} target="_blank">
            <img src={src} alt={alt} {...rest} />
        </StyledLink>
    );
};

export default Avatar;
