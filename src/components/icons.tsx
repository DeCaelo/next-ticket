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
    fromColor: "from-red-500",
    toColor: "to-orange-500",
    textColor: "text-red-100"
  },
  comment: {
    fromColor: "from-teal-500",
    toColor: "to-cyan-500",
    textColor: "text-teal-100"
  },
  pending: {
    fromColor: "from-amber-500",
    toColor: "to-yellow-500",
    textColor: "text-amber-100"
  },
  tag: {
    fromColor: "from-pink-500",
    toColor: "to-rose-500",
    textColor: "text-pink-100"
  },
  team: {
    fromColor: "from-violet-500",
    toColor: "to-purple-500",
    textColor: "text-violet-100"
  },
  archive: {
    fromColor: "from-stone-500",
    toColor: "to-zinc-500",
    textColor: "text-stone-100"
  },
  check: {
    fromColor: "from-green-500",
    toColor: "to-emerald-500",
    textColor: "text-green-100"
  },
  note: {
    fromColor: "from-blue-500",
    toColor: "to-indigo-50",
    textColor: "text-blue-100"
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
