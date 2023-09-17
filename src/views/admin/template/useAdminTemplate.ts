import { useContext } from "react"
import { TemplateContext } from "../../../context/admin/template/TemplateContext"
import { redirect } from "react-router-dom"

export const useAdminTemplate = () => {

  const { dispatch, templateState } = useContext(TemplateContext);

  const openDrawer = templateState.openDrawer;
  const menuItems = templateState.menuItems;

  const switchDrawer = () => {
    dispatch({ type: 'switchDrawer' });
  }

  const redirectRoute = async (url: string) => {

    console.log("Redirect to " + url)

    redirect(url);

  }

  return {
    openDrawer,
    menuItems,
    switchDrawer,
    redirectRoute,
  }

}