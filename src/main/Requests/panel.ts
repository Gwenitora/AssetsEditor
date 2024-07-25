import { requ, Request } from "@gscript/grequest";
import { json } from "@gscript/gtools";

abstract class Base extends Request {
    type: requ.type = requ.type.PUBLIC;
    callType: requ.callType = requ.callType.GET;
    authLevel: string | boolean = true;
    inImgs: json.objPersoType<boolean, false> = {};
    inTemplates: json.template[] = [];
    outTemplates: json.template[] = [];
    secret: boolean | { command?: true; helper: false; } | { command: true; helper?: false; } | { command?: false; helper: true; } | { command: false; helper?: true; }
        = false;

    start(): boolean {
        return true;
    }

    async run(datas: requ.requestContent): Promise<requ.requestResponse> {
        return {
            resFile: 'src/main/controlPanel/index.html',
            resCode: requ.httpCodes._200_Success._200_OK
        }
    }
}

export class Panel extends Base {
    link: string = '/panel/*';
}

export class Panel1 extends Base {
    link: string = '/panel';
}

export class Panel2 extends Base {
    link: string = '/';
}



export class StylePanel extends Base {
    link: string = '/panei/style';

    async run(datas: requ.requestContent): Promise<requ.requestResponse> {
        return {
            resFile: 'src/main/controlPanel/style/index.css',
            resCode: requ.httpCodes._200_Success._200_OK
        }
    }
}

export class ScriptPanel extends Base {
    link: string = '/panei/script';

    async run(datas: requ.requestContent): Promise<requ.requestResponse> {
        return {
            resFile: 'src/main/controlPanel/scripts/index.js',
            resCode: requ.httpCodes._200_Success._200_OK
        }
    }
}