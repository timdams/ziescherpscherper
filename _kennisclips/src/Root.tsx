import { Composition, Folder } from "remotion";
import { DUUR, RawStringLiterals } from "./clips/h03-raw-strings/RawStringLiterals";
import { DUUR as QUEUE_STACK_DUUR, QueueStack } from "./clips/h12-queue-stack/QueueStack";
import { DUUR as REEL_256_DUUR, Reel256Assen } from "./reels/h02-256-assen/Reel256Assen";
import { DUUR as REEL_APOLLO_DUUR, ReelApollo } from "./reels/h02-apollo/ReelApollo";
import { DUUR as REEL_ROOSTER_DUUR, ReelRoostertool } from "./reels/h06-roostertool/ReelRoostertool";
import { DUUR as REEL_DOBBEL_DUUR, ReelDobbelsteen } from "./reels/h04-dobbelsteen/ReelDobbelsteen";
import { DUUR as REEL_DWARF_DUUR, ReelDwarfFortress } from "./reels/h03-dwarf-fortress/ReelDwarfFortress";
import { DUUR as REEL_LOG4SHELL_DUUR, ReelLog4Shell } from "./reels/h07-log4shell/ReelLog4Shell";
import { DUUR as REEL_MARS_DUUR, ReelMarsClimateOrbiter } from "./reels/h04-mars-climate-orbiter/ReelMarsClimateOrbiter";
import { DUUR as REEL_SEEDS_DUUR, ReelMinecraftSeeds } from "./reels/h04-minecraft-seeds/ReelMinecraftSeeds";

const STAAND = { fps: 30, width: 1080, height: 1920 };

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="H03-tekst">
        <Composition
          id="RawStringLiterals"
          component={RawStringLiterals}
          durationInFrames={DUUR}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="H12-arrays-en-klassen">
        <Composition
          id="QueueStack"
          component={QueueStack}
          durationInFrames={QUEUE_STACK_DUUR}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="Reels">
        <Composition id="Reel-256-assen" component={Reel256Assen} durationInFrames={REEL_256_DUUR} {...STAAND} />
        <Composition
          id="Reel-mars-climate-orbiter"
          component={ReelMarsClimateOrbiter}
          durationInFrames={REEL_MARS_DUUR}
          {...STAAND}
        />
        <Composition id="Reel-minecraft-seeds" component={ReelMinecraftSeeds} durationInFrames={REEL_SEEDS_DUUR} {...STAAND} />
        <Composition id="Reel-apollo" component={ReelApollo} durationInFrames={REEL_APOLLO_DUUR} {...STAAND} />
        <Composition id="Reel-roostertool" component={ReelRoostertool} durationInFrames={REEL_ROOSTER_DUUR} {...STAAND} />
        <Composition id="Reel-dobbelsteen" component={ReelDobbelsteen} durationInFrames={REEL_DOBBEL_DUUR} {...STAAND} />
        <Composition id="Reel-dwarf-fortress" component={ReelDwarfFortress} durationInFrames={REEL_DWARF_DUUR} {...STAAND} />
        <Composition id="Reel-log4shell" component={ReelLog4Shell} durationInFrames={REEL_LOG4SHELL_DUUR} {...STAAND} />
      </Folder>
    </>
  );
};
