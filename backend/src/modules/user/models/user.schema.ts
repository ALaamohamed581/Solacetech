import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class LocalizedName {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  fatherName: string;

  @Prop({ required: true })
  grandfatherName: string;

  @Prop({ required: true })
  familyName: string;
}

export const LocalizedNameSchema = SchemaFactory.createForClass(LocalizedName);

@Schema()
export class NationalId {
  @Prop({ required: true })
  idNumber: string;

  @Prop({ required: true })
  expiryDate: string;
}

export const NationalIdSchema = SchemaFactory.createForClass(NationalId);

@Schema()
export class Country {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);

@Schema()
export class Nationality {
  @Prop({ type: CountrySchema, required: true })
  country: Country;

  @Prop({ required: true })
  countryId: number;
}

export const NationalitySchema = SchemaFactory.createForClass(Nationality);

@Schema()
export class MaritalStatus {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;
}

export const MaritalStatusSchema = SchemaFactory.createForClass(MaritalStatus);

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  fatherName: string;

  @Prop({ required: true })
  grandfatherName: string;

  @Prop({ required: true })
  familyName: string;

  @Prop({ type: LocalizedNameSchema, required: false })
  localizedName?: LocalizedName;

  @Prop({ type: NationalIdSchema, required: false })
  nationalId?: NationalId;

  @Prop({ type: [NationalitySchema], required: false })
  nationalities?: Nationality[];

  @Prop({ type: MaritalStatusSchema, required: false })
  maritalStatus?: MaritalStatus;

  @Prop({ required: true })
  dependants: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
