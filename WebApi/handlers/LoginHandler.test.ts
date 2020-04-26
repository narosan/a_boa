import LoginHandler from './LoginHandler';
import { Forbidden, BadRequest, InternalError } from '../util/error';

test('should return forbidden error', () => {
    let { req, res, next }: any = {};
    expect(LoginHandler.singIn(req, res, next)).toEqual(new Forbidden());
});

test('should return badrequest error', () => {
    let { req, res, next }: any = {};
    req = {
        body: {
            id: 'teste'
        },
        header: {
            'x-access-token': ''
        }
    }
    expect(LoginHandler.singIn(req, res, next)).toEqual(new BadRequest());
});