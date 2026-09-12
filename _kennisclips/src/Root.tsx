import { Composition, Folder } from "remotion";
import { DUUR, RawStringLiterals } from "./clips/h03-raw-strings/RawStringLiterals";
import { DUUR as REEL_256_DUUR, Reel256Assen } from "./reels/h02-256-assen/Reel256Assen";
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
      <Folder name="Reels">
        <Composition id="Reel-256-assen" component={Reel256Assen} durationInFrames={REEL_256_DUUR} {...STAAND} />
        <Composition
          id="Reel-mars-climate-orbiter"
          component={ReelMarsClimateOrbiter}
          durationInFrames={REEL_MARS_DUUR}
          {...STAAND}
        />
        <Composition id="Reel-minecraft-seeds" component={ReelMinecraftSeeds} durationInFrames={REEL_SEEDS_DUUR} {...STAAND} />
      </Folder>
    </>
  );
};
