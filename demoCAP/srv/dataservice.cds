using {com.democap as my} from '/home/user/projects/demoCAP/db/datamodel.cds';

service CatalogService {
    entity Persons as projection on my.Persons;
}