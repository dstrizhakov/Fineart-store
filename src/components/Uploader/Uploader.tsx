import Uploading from "./Uploading";
import Main from "./Main";
import Result from "./Result";
import { useState } from "react";

const Uploader = () => {
    const [fileURL, setFileURL] = useState<string>("");
    const [uploading, setUploading] = useState<boolean>(true);
    const [copied, setCopied] = useState<boolean>(false);
    if (fileURL.length) {
        if (uploading) {
            setTimeout(() => {
                setUploading(false);
            }, 1400);
            return <Uploading />;
        } else
            return (
                <Result
                    fileURL={fileURL}
                    setCopied={setCopied}
                    copied={copied}
                    setFileURL={setFileURL}
                    setUploading={setUploading}
                />
            );
    } else return <Main setFileURL={setFileURL} />;
};

export default Uploader;