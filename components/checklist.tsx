import { Check, X } from "lucide-react"

interface ChecklistProps {
  incluye: string[]
  noIncluye?: string[]
  title?: string
}

export default function Checklist({ incluye, noIncluye, title }: ChecklistProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Incluye */}
        <div>
          <h4 className="text-sm font-semibold text-green-700 mb-3 uppercase tracking-wide">✓ Incluye</h4>
          <ul className="space-y-2">
            {incluye.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* No incluye */}
        {noIncluye && noIncluye.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-red-700 mb-3 uppercase tracking-wide">✗ No incluye</h4>
            <ul className="space-y-2">
              {noIncluye.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
