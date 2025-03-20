import DiceIcon from '../../../../public/dice.svg'
import Image from 'next/image'
interface SpellDetailItemProps {
  title: string
  content: React.ReactNode
}

export const SpellDetailItem: React.FC<SpellDetailItemProps> = ({ title, content: details }) => (
  <div className="col-auto">
    <div className="flex float-left items-center">
      <Image
        src={DiceIcon}
        height={50}
        width={50}
        alt="Dice Icon"
        className="rounded-full bg-violet-500/10 p-3"
      />

      <div className="px-3.5 flex flex-col">
        <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">{title}:</h3>
        <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">{details}</p>
      </div>
    </div>
  </div>
)
