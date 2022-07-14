import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Token} from "./token.model"
import {Resource} from "./resource.model"

@Entity_()
export class TokenResource {
  constructor(props?: Partial<TokenResource>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: false})
  token!: Token

  @Index_()
  @ManyToOne_(() => Resource, {nullable: false})
  resource!: Resource
}
