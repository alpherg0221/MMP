import Card from "@mui/joy/Card";
import {Stack} from "@mui/joy";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import Typography from "@mui/joy/Typography";
import LinearProgress from "@mui/joy/LinearProgress";

export const StorageCapacity = () => (
    <Card invertedColors variant="soft" color="primary" size="sm" sx={ { boxShadow: "none" } }>
      <Stack direction="row" sx={ { alignItems: "center", gap: 1 } }>
        <CloudRoundedIcon/>
        <Typography level="title-sm">保存容量</Typography>
      </Stack>

      <Typography level="body-xs">
        Google Driveの空き容量です。<br/>
        空き容量が足りないと、データが保存されない可能性があります。
      </Typography>

      <LinearProgress variant="outlined" value={ 80 } determinate sx={ { my: 1 } }/>
    </Card>
);