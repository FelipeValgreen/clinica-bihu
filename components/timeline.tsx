interface TimelineStep {
  title: string
  description: string
}

interface TimelineProps {
  steps: TimelineStep[]
  title?: string
}

export default function Timeline({ steps, title }: TimelineProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>}

      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start pb-8 last:pb-0">
            {/* Timeline line */}
            {index < steps.length - 1 && <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-200" />}

            {/* Step number */}
            <div className="flex-shrink-0 w-8 h-8 bg-[#023B6A] text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </div>

            {/* Step content */}
            <div className="ml-4">
              <h4 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
