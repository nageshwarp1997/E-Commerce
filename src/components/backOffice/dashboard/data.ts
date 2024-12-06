import { CardIcon, CartIcon, ThreeLayerIcon } from "@/icons";
import { FC } from "react";
interface Details {
  id: number;
  label: string;
  value: string;
}
export interface LargeCardProps {
  id: number;
  icon: FC<{ className?: string }>;
  title: string;
  value: string;
  className: string;
  details: Details[];
}

export const cardsData: LargeCardProps[] = [
  {
    id: 1,
    icon: ThreeLayerIcon,
    title: "Today's Sales",
    value: "$3367.96",
    className: "bg-teal-600 text-teal-100",
    details: [
      {
        id: 1,
        label: "Cash",
        value: "$3367.96",
      },
      {
        id: 2,
        label: "Card",
        value: "$0.00",
      },
      {
        id: 3,
        label: "Credit",
        value: "$0.00",
      },
    ],
  },
  {
    id: 2,
    icon: ThreeLayerIcon,
    title: "Yesterday's Sales",
    value: "$1743.36",
    className: "bg-orange-400 text-orange-100",
    details: [
      {
        id: 1,
        label: "Cash",
        value: "$1743.36",
      },
      {
        id: 2,
        label: "Card",
        value: "$0.00",
      },
      {
        id: 3,
        label: "Credit",
        value: "$0.00",
      },
    ],
  },
  {
    id: 3,
    icon: CartIcon,
    title: "This Month's Sales",
    value: "$7421.55",
    className: "bg-blue-500 text-blue-100",
    details: [
      {
        id: 1,
        label: "Cash",
        value: "$2243.36",
      },
      {
        id: 2,
        label: "Card",
        value: "$4087.19",
      },
      {
        id: 3,
        label: "Credit",
        value: "$1091.00",
      },
    ],
  },
  {
    id: 4,
    icon: CardIcon,
    title: "Last Month's Sales",
    value: "$14010.79",
    className: "bg-cyan-600 text-cyan-100",
    details: [
      {
        id: 1,
        label: "Cash",
        value: "$9743.36",
      },
      {
        id: 2,
        label: "Card",
        value: "$3097.19",
      },
      {
        id: 3,
        label: "Credit",
        value: "$1170.24",
      },
    ],
  },
  {
    id: 5,
    icon: CardIcon,
    title: "All Time Sales",
    value: "$321334.34",
    className: "bg-emerald-600 text-emerald-100",
    details: [
      {
        id: 1,
        label: "Cash",
        value: "$120000.96",
      },
      {
        id: 2,
        label: "Card",
        value: "$140000.90",
      },
      {
        id: 3,
        label: "Credit",
        value: "$61332.48",
      },
    ],
  },
];
