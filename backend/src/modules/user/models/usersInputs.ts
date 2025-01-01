import { ObjectType, InputType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocalizedNameDto {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@InputType()
export class LocalizedNameInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
export class NationalIdDto {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@InputType()
export class NationalIdInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class CountryDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@InputType()
export class CountryInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class NationalityDto {
  @Field(() => CountryDto)
  country: CountryDto;

  @Field(() => Int)
  countryId: number;
}

@InputType()
export class NationalityInput {
  @Field(() => CountryInput)
  country: CountryInput;

  @Field(() => Int)
  countryId: number;
}

@ObjectType()
export class MaritalStatusDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@InputType()
export class MaritalStatusInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class UserDto {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedNameDto, { nullable: true })
  localizedName?: LocalizedNameDto;

  @Field(() => NationalIdDto, { nullable: true })
  nationalId?: NationalIdDto;

  @Field(() => [NationalityDto], { nullable: true })
  nationalities?: NationalityDto[];

  @Field(() => MaritalStatusDto, { nullable: true })
  maritalStatus?: MaritalStatusDto;

  @Field(() => Int)
  dependants: number;
}

@InputType()
export class UserInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedNameInput, { nullable: true })
  localizedName?: LocalizedNameInput;

  @Field(() => NationalIdInput, { nullable: true })
  nationalId?: NationalIdInput;

  @Field(() => [NationalityInput], { nullable: true })
  nationalities?: NationalityInput[];

  @Field(() => MaritalStatusInput, { nullable: true })
  maritalStatus?: MaritalStatusInput;

  @Field(() => Int)
  dependants: number;
}
