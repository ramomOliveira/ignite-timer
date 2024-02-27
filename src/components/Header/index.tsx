import { HeaderContainer, Tooltip } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { Broom, Scroll, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export default function Header() {
  const { storageClear } = useContext(CyclesContext)

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <div>
        <Tooltip>
          <p>Limpar lista</p>
          <button
            onClick={() => {
              storageClear()
            }}
          >
            <Broom size={24} weight="regular" />
          </button>
        </Tooltip>
        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
