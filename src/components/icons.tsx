import {
  AlertCircle,
  Clock,
  LucideIcon,
  MessagesSquare,
  Tag,
  Users
} from "lucide-react";

import { cn } from "../lib/utils";

interface IconCardProps {
  icon: LucideIcon;
  size?: "xs" | "sm" | "md" | "lg";
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  label?: string;
}

export function IconCard({
  icon: Icon,
  size = "md",
  fromColor = "from-blue-500",
  toColor = "to-indigo-500",
  textColor = "text-blue-100",
  label = "Icon"
}: IconCardProps) {
  return (
    <div
      role="img"
      aria-label={`${label} Icon`}
      className={cn(
        "inline-flex items-center justify-center bg-gradient-to-br",
        fromColor,
        toColor,
        textColor,
        {
          "size-6 rounded": size === "xs",
          "size-8 rounded-md": size === "sm",
          "size-9 rounded-md": size === "md",
          "size-10 rounded-lg": size === "lg"
        }
      )}
    >
      <Icon
        className={cn({
          "size-4": size === "sm" || size === "xs",
          "size-5": size === "md",
          "size-6": size === "lg"
        })}
      />
    </div>
  );
}

export const ICON_PRESETS = {
  priority: {
    fromColor: "from-[oklch(66%_0.15_29.2)]", // red-500
    toColor: "to-[oklch(71%_0.17_47.6)]", // orange-500
    textColor: "text-[oklch(86%_0.12_29.2)]" // red-100
  },
  comment: {
    fromColor: "from-[oklch(70%_0.12_181.7)]", // teal-500
    toColor: "to-[oklch(73%_0.13_195.8)]", // cyan-500
    textColor: "text-[oklch(90%_0.08_181.7)]" // teal-100
  },
  pending: {
    fromColor: "from-[oklch(75%_0.16_75.5)]", // amber-500
    toColor: "to-[oklch(83%_0.15_88.7)]", // yellow-500
    textColor: "text-[oklch(92%_0.09_75.5)]" // amber-100
  },
  tag: {
    fromColor: "from-[oklch(66%_0.21_332.4)]", // pink-500
    toColor: "to-[oklch(61%_0.22_15.1)]", // rose-500
    textColor: "text-[oklch(89%_0.11_332.4)]" // pink-100
  },
  team: {
    fromColor: "from-[oklch(65%_0.22_288.4)]", // violet-500
    toColor: "to-[oklch(60%_0.21_306.3)]", // purple-500
    textColor: "text-[oklch(88%_0.11_288.4)]" // violet-100
  },
  archive: {
    fromColor: "from-[oklch(63%_0.05_83.4)]", // stone-500
    toColor: "to-[oklch(62%_0.03_264.3)]", // zinc-500
    textColor: "text-[oklch(90%_0.02_83.4)]" // stone-100
  },
  check: {
    fromColor: "from-[oklch(70%_0.13_142.5)]", // green-500
    toColor: "to-[oklch(68%_0.14_160.7)]", // emerald-500
    textColor: "text-[oklch(90%_0.08_142.5)]" // green-100
  },
  note: {
    fromColor: "from-[oklch(65%_0.15_231.6)]", // blue-500
    toColor: "to-[oklch(96%_0.15_231.6)]", // indigo-50
    textColor: "text-[oklch(88%_0.09_231.6)]" // blue-100
  }
} as const;

export function Example() {
  return (
    <div className="space-y-4">
      {/* Utilisation basique */}
      <div className="flex gap-4">
        <IconCard
          icon={AlertCircle}
          {...ICON_PRESETS.priority}
          label="Priority"
        />
        <IconCard
          icon={MessagesSquare}
          {...ICON_PRESETS.comment}
          label="Comment"
        />
        <IconCard icon={Clock} {...ICON_PRESETS.pending} label="Pending" />
      </div>

      {/* Différentes tailles */}
      <div className="flex items-end gap-4">
        <IconCard icon={Tag} size="xs" {...ICON_PRESETS.tag} label="Tag" />
        <IconCard icon={Tag} size="sm" {...ICON_PRESETS.tag} label="Tag" />
        <IconCard icon={Tag} size="md" {...ICON_PRESETS.tag} label="Tag" />
        <IconCard icon={Tag} size="lg" {...ICON_PRESETS.tag} label="Tag" />
      </div>

      {/* Personnalisé */}
      <IconCard
        icon={Users}
        fromColor="from-green-500"
        toColor="to-emerald-500"
        textColor="text-green-100"
        label="Custom"
      />

      <IconCard
        icon={AlertCircle}
        {...ICON_PRESETS.priority}
        label="Priority"
      />
    </div>
  );
}

// CardPriorityIcon (rouge/orange)

// Utilise AlertCircleIcon pour indiquer les tickets urgents/prioritaires
// Le dégradé rouge-orange suggère l'urgence/importance

// CardCommentIcon (teal/cyan)

// Utilise MessagesSquareIcon pour les discussions/commentaires
// Le dégradé teal-cyan donne un aspect plus collaboratif/communicatif

// CardPendingIcon (ambre/jaune)

// Utilise ClockIcon pour les tickets en attente
// Le dégradé ambre-jaune suggère un statut intermédiaire/en attente

// CardTagIcon (rose)

// Pour la catégorisation et le tagging des tickets
// Utile pour organiser et filtrer les tickets par type

// CardTeamIcon (violet)

// Pour l'assignation et la gestion d'équipe
// Pour voir qui travaille sur quels tickets

// CardSearchIcon (bleu ciel)

// Pour la fonction de recherche
// Permet de retrouver rapidement des tickets spécifiques

// CardFilterIcon (vert)

// Pour les fonctionnalités de filtrage
// Pour affiner les vues et les listes de tickets

// CardArchiveIcon (gris)

// Pour l'archivage des tickets résolus
// Pour garder une trace des tickets terminés

// CardHistoryIcon (indigo)

// Pour l'historique des modifications
// Pour suivre l'évolution d'un ticket
