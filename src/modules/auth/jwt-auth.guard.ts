import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';
import { ERole } from './enums/role.enum';
import { ROLES_KEY } from './decorators/roles.decorator';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles && isPublic) {
      return true;
    }

    if (requiredRoles) {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization?.replace('Bearer ', '');

      try {
        const user = this.jwtService.verify(token) as LoginResponseDto;

        return requiredRoles.some((role) => user.roles?.includes(role));
      } catch (error) {
        return false;
      }
    }

    return super.canActivate(context);
  }
}
