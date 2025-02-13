import ChevronDown from "assets/icons/ChevronDown.svg?react"
import { Text } from "components/Typography/Text/Text"
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useToggle } from "react-use"
import {
  SContainer,
  SContent,
  SHeader,
  SHide,
  SToggle,
} from "./ToastSidebarGroup.styled"

type Props = { title: string; children: ReactNode; open?: boolean }

export const ToastSidebarGroup = ({ title, children, open = true }: Props) => {
  const { t } = useTranslation()
  const [isOpen, toggle] = useToggle(open)

  return (
    <div>
      <SToggle onClick={toggle} isOpen={isOpen}>
        <SHeader>{title}</SHeader>
        <SHide>
          <Text color="darkBlue300" fs={12} fw={500}>
            {isOpen ? t("hide") : t("show")}
          </Text>
          <ChevronDown />
        </SHide>
      </SToggle>
      <SContainer isOpen={isOpen}>
        <SContent>
          <div sx={{ p: [8, 20] }}>{children}</div>
        </SContent>
      </SContainer>
    </div>
  )
}
