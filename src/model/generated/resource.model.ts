import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {TokenResource} from "./tokenResource.model"

@Entity_()
export class Resource {
  constructor(props?: Partial<Resource>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  metadataURI!: string | undefined | null

  @OneToMany_(() => TokenResource, e => e.resource)
  usedOnTokens!: TokenResource[]
}
