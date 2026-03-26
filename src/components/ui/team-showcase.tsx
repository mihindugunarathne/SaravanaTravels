"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBehance, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { SARAVANA_TEAM, type TeamMember } from "@/data/teamShowcase";

export type { TeamMember };

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = SARAVANA_TEAM }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="mx-auto flex w-full max-w-6xl select-none flex-col items-start gap-8 px-4 py-8 font-sans md:flex-row md:gap-10 md:px-6 lg:gap-14">
      <div className="flex flex-shrink-0 gap-2 overflow-x-auto pb-1 md:gap-3 md:overflow-visible md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[158px] w-[145px] sm:h-[186px] sm:w-[172px] md:h-[218px] md:w-[200px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[58px] flex flex-col gap-2 sm:mt-[68px] md:mt-[84px] md:gap-3">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[174px] w-[160px] sm:h-[204px] sm:w-[188px] md:h-[240px] md:w-[220px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[28px] flex flex-col gap-2 sm:mt-[34px] md:mt-[42px] md:gap-3">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[164px] w-[152px] sm:h-[194px] sm:w-[178px] md:h-[228px] md:w-[208px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full flex-1 grid-cols-1 gap-5 pt-0 sm:grid-cols-2 md:flex md:flex-col md:gap-7 md:pt-4">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-opacity duration-500",
        className,
        isDimmed ? "opacity-60" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.77)",
        }}
        sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
      />
    </div>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-3 md:gap-3.5">
        <span
          className={cn(
            "h-4 w-5 flex-shrink-0 rounded-md transition-all duration-300 md:h-[18px] md:w-6",
            isActive ? "w-6 bg-[#03045E] md:w-7" : "bg-[#03045E]/25",
          )}
        />
        <span
          className={cn(
            "text-lg font-semibold leading-tight tracking-tight transition-colors duration-300 md:text-xl md:leading-none lg:text-[22px]",
            isActive ? "text-[#03045E]" : "text-[#03045E]/80",
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              "ml-1 flex items-center gap-2 transition-all duration-200 md:gap-2.5",
              isActive
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-2 opacity-0",
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-md p-1.5 text-gray-500 transition-all duration-150 hover:scale-110 hover:bg-[#03045E]/10 hover:text-[#03045E] md:p-2"
                title="X / Twitter"
              >
                <FaTwitter className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-md p-1.5 text-gray-500 transition-all duration-150 hover:scale-110 hover:bg-[#03045E]/10 hover:text-[#03045E] md:p-2"
                title="LinkedIn"
              >
                <FaLinkedinIn className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-md p-1.5 text-gray-500 transition-all duration-150 hover:scale-110 hover:bg-[#03045E]/10 hover:text-[#03045E] md:p-2"
                title="Instagram"
              >
                <FaInstagram className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-md p-1.5 text-gray-500 transition-all duration-150 hover:scale-110 hover:bg-[#03045E]/10 hover:text-[#03045E] md:p-2"
                title="Behance"
              >
                <FaBehance className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-2 pl-8 text-[10px] font-medium uppercase tracking-[0.22em] text-gray-500 sm:pl-9 sm:text-[11px] md:mt-2.5 md:pl-10 md:text-xs md:tracking-[0.2em]">
        {member.role}
      </p>
    </div>
  );
}
