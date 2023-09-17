import { createContext } from "react";
import { TemplateAction } from "./TemplateReducer";
import { TemplateState } from "./interface/interface"

export type TemplateContextProps = {
  templateState: TemplateState;
  dispatch: React.Dispatch<TemplateAction>
}

export const TemplateContext = createContext<TemplateContextProps>({} as TemplateContextProps);