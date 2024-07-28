import type {ChatComponentPropsChildren, EmptyProps} from "../../types";
import {ReactElement} from "react";

export type ConversationStreamOwnProps = EmptyProps;
export type ConversationStreamProps = ChatComponentPropsChildren<ConversationStreamOwnProps, "div">

export declare const ConversationStream: (props:ConversationStreamProps) => ReactElement;

export default ConversationStream;