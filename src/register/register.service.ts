import { Injectable} from '@nestjs/common';

@Injectable()
export class RegisterService {
    async registerUser(req):Promise<string>{
        return `Cliente cadastrado com sucesso!`
    }
}