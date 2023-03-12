import Typography from "./Typography";
import Container from "./Container";
import TextField from "./TextField";
import Button from "./Button";

export default function ComponentsOverrides(theme) {
    return Object.assign(
        Typography(theme),
        Container(theme),
        TextField(theme),
        Button(theme),
    );
}
