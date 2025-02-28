import { useCurrentUser } from "@/lib/utils";
import React from "react";
import LeaveTeamDialog from "./leave-team-dialog";
import type { CompetitionWithDetails, TeamWithFullDetails } from "@/app/types";
import InviteTeammatesDialog from "./invite-teammates-dialog";
import TeammateBox from "./teammate-box";
import InvitationBox from "./team-invitations-box";
import { motion } from "motion/react";
import MarqueeContainer from "@/components/common/marquee-container";
import FinalizeTeamDialog from "./finalize-team-dialog";

const CompTeamBox = ({
  regTeam,
  comp,
}: {
  regTeam: TeamWithFullDetails | null | undefined;
  comp: CompetitionWithDetails;
}) => {
  const { CurrentUser } = useCurrentUser();

  return (
    <div className="relative flex min-h-96 flex-col overflow-x-clip border-2 border-amber-50">
      {regTeam ? (
        <>
          <motion.div
            className={`flex h-12 w-full flex-row items-center overflow-clip border-b-2 border-amber-50 bg-neutral-900 text-2xl font-normal uppercase text-amber-50`}
          >
            <MarqueeContainer
              text={[
                "your team",
                regTeam.name,
                "your team",
                regTeam.name,
                "your team",
                regTeam.name,
              ]}
            />
          </motion.div>
          <div className="flex h-full flex-col">
            <TeammateBox regTeam={regTeam} />
            {!regTeam.finalized && (
              <div className="flex flex-col justify-end gap-5 p-5 pt-0 sm:flex-row">
                {CurrentUser?.id === regTeam.leaderId && (
                  <FinalizeTeamDialog regTeam={regTeam} comp={comp} />
                )}
                <LeaveTeamDialog regTeamId={regTeam.id} />
                {CurrentUser?.id === regTeam.leaderId && (
                  <InviteTeammatesDialog
                    regTeam={regTeam}
                    compId={comp?.id ?? ""}
                  />
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <motion.div
            className={`flex h-12 w-full flex-row items-center overflow-clip border-b-2 border-amber-50 bg-neutral-900 text-2xl font-normal uppercase text-amber-50`}
          >
            <MarqueeContainer
              text={[
                "your invitations",
                "your invitations",
                "your invitations",
                "your invitations",
              ]}
            />
          </motion.div>
          <InvitationBox compId={comp?.id ?? ""} />
        </>
      )}
    </div>
  );
};

export default CompTeamBox;
