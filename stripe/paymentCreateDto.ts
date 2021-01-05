import { IsNotEmpty } from "class-validator/types/decorator/common/IsNotEmpty";
import { IsNumber } from "class-validator/types/decorator/typechecker/IsNumber";
import { IsString } from "class-validator/types/decorator/typechecker/IsString";

export class PaymentCreateDto {
  // ... Other parameters

  // @IsNotEmpty()
  // @IsNumber()
  // price: number;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  items: object[];
}