interface SpellDetailItemProps {
  title: string
  content: React.ReactNode
}

export const SpellDetailItem: React.FC<SpellDetailItemProps> = ({ title, content }) => (
  <div className="flex gap-4 items-start">
    <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full"></span>
    <div>
      <h3 className="font-semibold text-xl">{title}:</h3>
      <div className="mt-1 text-gray-400">{content}</div>
    </div>
  </div>
)
