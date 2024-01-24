using {my.dig as my} from '../db/data-model';

service TrialEndpoints {
    entity Cars as projection on my.Cars;
    entity Opportunities as projection on my.Opportunities;
    entity Categories as projection on my.Categories;
    entity Revenues as projection on my.Revenues;
   
}
