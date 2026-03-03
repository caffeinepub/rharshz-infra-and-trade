import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Time "mo:core/Time";

actor {
  type FormSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    projectType : Text;
    preferredDate : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Property = {
    id : Nat;
    title : Text;
    location : Text;
    price : Nat;
    description : Text;
    bedrooms : Nat;
    bathrooms : Nat;
    area : Nat;
    imageTag : Text;
  };

  type Service = {
    id : Nat;
    title : Text;
    description : Text;
    icon : Text;
    category : Text;
  };

  let formEntries = Map.empty<Nat, FormSubmission>();
  let propertyEntries = Map.empty<Nat, Property>();
  let serviceEntries = Map.empty<Nat, Service>();

  var nextFormId = 1;
  var nextPropertyId = 1;
  var nextServiceId = 1;

  // Access control (simplified)
  let adminPrincipal = Principal.fromText("2vxsx-fae");

  func checkIsAdmin(caller : Principal) {
    if (caller != adminPrincipal) {
      Runtime.trap("Not authorized. Only admin can access this endpoint.");
    };
  };

  // Add Form Submission
  public shared ({ caller }) func addFormSubmission(name : Text, email : Text, phone : Text, projectType : Text, preferredDate : Text, message : Text) : async Nat {
    let id = nextFormId;
    nextFormId += 1;

    let form = {
      id;
      name;
      email;
      phone;
      projectType;
      preferredDate;
      message;
      timestamp = Time.now();
    };

    formEntries.add(id, form);
    id;
  };

  // Get All Form Submissions (Admin Only)
  public shared ({ caller }) func getAllFormSubmissions() : async [FormSubmission] {
    checkIsAdmin(caller);
    formEntries.values().toArray();
  };

  // Add Property (Admin Only)
  public shared ({ caller }) func addProperty(title : Text, location : Text, price : Nat, description : Text, bedrooms : Nat, bathrooms : Nat, area : Nat, imageTag : Text) : async Nat {
    checkIsAdmin(caller);
    let id = nextPropertyId;
    nextPropertyId += 1;

    let property = {
      id;
      title;
      location;
      price;
      description;
      bedrooms;
      bathrooms;
      area;
      imageTag;
    };

    propertyEntries.add(id, property);
    id;
  };

  // Add Service (Admin Only)
  public shared ({ caller }) func addService(title : Text, description : Text, icon : Text, category : Text) : async Nat {
    checkIsAdmin(caller);
    let id = nextServiceId;
    nextServiceId += 1;

    let service = {
      id;
      title;
      description;
      icon;
      category;
    };

    serviceEntries.add(id, service);
    id;
  };

  // Get All Properties (Public)
  public query ({ caller }) func getAllProperties() : async [Property] {
    propertyEntries.values().toArray();
  };

  // Get All Services (Public)
  public query ({ caller }) func getAllServices() : async [Service] {
    serviceEntries.values().toArray();
  };

  // Seed Sample Data (Admin Only)
  public shared ({ caller }) func seedSampleData() : async () {
    checkIsAdmin(caller);

    // Seed Properties
    for (property in [
      {
        title = "Oceanview Villa";
        location = "Goa, Beachfront";
        price = 15000000;
        description = "Luxury 5BHK villa with sea views";
        bedrooms = 5;
        bathrooms = 4;
        area = 5500;
        imageTag = "villa";
      },
      {
        title = "Penthouse Apartment";
        location = "Mumbai, Bandra";
        price = 20000000;
        description = "Ultra-modern 4BHK penthouse with pool";
        bedrooms = 4;
        bathrooms = 5;
        area = 4000;
        imageTag = "penthouse";
      },
      {
        title = "Golf Course Mansion";
        location = "Bengaluru, Whitefield";
        price = 18000000;
        description = "6BHK mansion with golf course views";
        bedrooms = 6;
        bathrooms = 6;
        area = 7000;
        imageTag = "mansion";
      },
      {
        title = "Luxury Bungalow";
        location = "Delhi, Golf Links";
        price = 22000000;
        description = "Stunning 5BHK bungalow with garden";
        bedrooms = 5;
        bathrooms = 5;
        area = 6000;
        imageTag = "bungalow";
      },
      {
        title = "Lakefront Villa";
        location = "Pune, Kalyani Nagar";
        price = 14000000;
        description = "4BHK villa with private lake access";
        bedrooms = 4;
        bathrooms = 4;
        area = 3500;
        imageTag = "lakefront";
      },
      {
        title = "Heritage Property";
        location = "Jaipur, C-Scheme";
        price = 16000000;
        description = "5BHK palace-style home";
        bedrooms = 5;
        bathrooms = 5;
        area = 5500;
        imageTag = "heritage";
      },
    ].values()) {
      let id = nextPropertyId;
      nextPropertyId += 1;
      propertyEntries.add(
        id,
        {
          id;
          title = property.title;
          location = property.location;
          price = property.price;
          description = property.description;
          bedrooms = property.bedrooms;
          bathrooms = property.bathrooms;
          area = property.area;
          imageTag = property.imageTag;
        },
      );
    };

    // Seed Services
    for (service in [
      {
        title = "Highway Construction";
        description = "End-to-end highway & road development";
        icon = "road";
        category = "Infrastructure";
      },
      {
        title = "Bridge Engineering";
        description = "Design & construction of bridges";
        icon = "bridge";
        category = "Infrastructure";
      },
      {
        title = "Power Plant Setup";
        description = "Thermal, hydro & renewable power plant installation";
        icon = "power";
        category = "Energy";
      },
      {
        title = "Real Estate Development";
        description = "Luxury commercial & residential projects";
        icon = "buildings";
        category = "Construction";
      },
      {
        title = "Heavy Machinery Leasing";
        description = "Rental of construction equipment";
        icon = "machinery";
        category = "Trade";
      },
      {
        title = "Smart City Solutions";
        description = "Urban planning & smart infrastructure";
        icon = "city";
        category = "Urban Development";
      },
    ].values()) {
      let id = nextServiceId;
      nextServiceId += 1;
      serviceEntries.add(
        id,
        {
          id;
          title = service.title;
          description = service.description;
          icon = service.icon;
          category = service.category;
        },
      );
    };
  };
};
