type Option = {
  name: string;
  value: string | null;
};

interface ToggleProps {
  label: string;
  options: Option[];
  setLabel: (label: string) => void;
}

export default function Toggle({ options, setLabel, label }: ToggleProps) {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.name}
          data-testid={option.value}
          className={`px-2 py-0.5 text-sm uppercase font-bold ${
            label === option.value
              ? "bg-rtl-blue text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setLabel(option.value || "")}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}
