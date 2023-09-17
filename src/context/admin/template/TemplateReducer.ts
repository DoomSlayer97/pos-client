import { TemplateState } from "./interface/interface";

export type TemplateAction =
  | { type: 'switchDrawer' }

export const TemplateReducer = ( state: TemplateState, action: TemplateAction ): TemplateState => {

  switch (action.type) {

    case 'switchDrawer': {

      return {
        ...state,
        openDrawer: !state.openDrawer
      }

    }

  }

}