import template from "../template.js";


export default async function rudeText(req, res) {

    let text = req.query.text;

    let configgers = {
        "text_color": req.query.text_color || "FFFFFF",
        "animation": req.query.anim_name || "fall"
    }

    let anims = ["fall"]

    if (!anims.includes(configgers["animation"]))
    {
        configgers["animation"] = "fall";
    }

    let resp = template(configgers);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(resp);

}
