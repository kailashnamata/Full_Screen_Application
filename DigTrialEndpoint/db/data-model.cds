namespace my.dig;

entity Cars {
  key Company : String;
  name  : String;
  type  : String;
}

entity Opportunities {
  key opportunityID : String;
      status        : String;
      comments      : String;
      smes          : String;
      etc           : String;
      category      : String;
      objective     : String;
      title         : String;
}

entity Categories {
  key category  : String;
}

entity Revenues {
  key week      : String;
      revenue   : String;
      cost      : String;
      cost1     : String;
      cost2     : String;
      cost3     : String;
      target    : String;
      budget    : String;
}