import DiceIcon from '../../../../public/dice.svg'
import Image from 'next/image'
interface SpellDetailItemProps {
  title: string
  content: React.ReactNode
}

export const SpellDetailItem: React.FC<SpellDetailItemProps> = ({ title, content }) => (
  <div className="flex gap-4 items-center">
    <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
      <Image src={DiceIcon} height={30} width={30} alt="Dice Icon" />
    </span>
    <div>
      <h3 className="font-semibold text-xl">{title}:</h3>
      <div className="mt-1 text-gray-400">{content}</div>
    </div>
  </div>
)
