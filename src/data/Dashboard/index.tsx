interface growthCard {
  color: string;
  title: string;
  counter: number;
  growth?: boolean;
  number: string;
  icon:
    | "DollarSign"
    | "ShoppingBag"
    | "ShoppingBag"
    | "ShoppingBag"
    | "Pocket"
    | "UserPlus";
}
export const growthCardData: growthCard[] = [
  {
    color: "primary",
    title: "Wallet",
    counter: 6659,
    icon: "DollarSign",
    growth: true,
    number: "1-bg",
  },
  {
    color: "secondary",
    title: "Transaction Limit",
    counter: 893,
    icon: "Pocket",
    growth: true,
    number: "3-bg",
  },
  {
    color: "danger",
    title: "Total Booking",
    counter: 9856,
    icon: "ShoppingBag",
    number: "2-bg",
  },
  {
    color: "success",
    title: "Total User",
    counter: 45631,
    icon: "UserPlus",
    number: "4-bg",
  },
];

export const flightTakeOff = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <title>flight_takeoff</title>
      <path d="M22.078 9.656q0.141 0.609-0.164 1.125t-0.914 0.703q-5.813 1.547-9.656 2.578l-5.297 1.406-1.594 0.469-2.625-4.5 1.453-0.375 1.969 1.5 4.969-1.313-4.125-7.172 1.922-0.516 6.891 6.422 5.344-1.406q0.609-0.188 1.148 0.141t0.68 0.938zM2.484 18.984h19.031v2.016h-19.031v-2.016z"></path>
    </svg>
  );
};
export const flightLand = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <title>flight_land</title>
      <path d="M14.016 14.438q-3.844-1.078-9.656-2.578l-1.594-0.469v-5.156l1.453 0.375 0.938 2.344 4.969 1.313v-8.25l1.922 0.516 2.766 9 5.297 1.406q0.609 0.188 0.914 0.727t0.164 1.148q-0.188 0.609-0.703 0.891t-1.125 0.141zM2.484 18.984h19.031v2.016h-19.031v-2.016z"></path>
    </svg>
  );
};

export const bookingHistoryTableData = [
  {
    imgSrc: "../assets/images/tours/1.jpg",
    title: "Hot Air Balloon",
    airline: "Egyptair",
    nights: "10 Night",
    departureDate: "02 November",
    departureDetails: "25h 10m (2 stop)",
    arrivalDate: "03 November",
    status: "Active",
    price: "$900",
  },
  {
    imgSrc: "../assets/images/tours/2.jpg",
    title: "Cool Water Ride",
    airline: "Chine",
    nights: "25 Night",
    departureDate: "04 March",
    departureDetails: "10h 20m (1 stop)",
    arrivalDate: "05 March",
    status: "Booked",
    price: "$900",
  },
  {
    imgSrc: "../assets/images/tours/3.jpg",
    title: "Tour of Shimala",
    airline: "India",
    nights: "15 Night",
    departureDate: "03 November",
    departureDetails: "30h 20m (2 stop)",
    arrivalDate: "03 November",
    status: "Active",
    price: "$1500",
  },
  {
    imgSrc: "../assets/images/tours/4.jpg",
    title: "Beautiful Bali",
    airline: "Us",
    nights: "14 Night",
    departureDate: "02 November",
    departureDetails: "30h 20m (1 stop)",
    arrivalDate: "02 November",
    status: "Booked",
    price: "$1200",
  },
];
export const bookingHistoryData = [
  {
    id: 1,
    itinerary_id: 1,
    origin: "Pakistan",
    destination: "India",
    arrival_date_time: "Sat, 12 Oct 2023",
    depart_date_time: "Sat, 12 Oct 2023",
    flight_no: "CDG 1122",
    airline: "Cathay Pacific",
    agent_id: 1,
    status: "Pending",
    createdAt: "2024-02-06T12:52:53.000Z",
    updatedAt: "2024-02-06T12:52:53.000Z",
  },
  {
    id: 2,
    itinerary_id: 2,
    origin: "USA",
    destination: "Canada",
    arrival_date_time: "Fri, 25 Dec 2023",
    depart_date_time: "Fri, 25 Dec 2023",
    flight_no: "ABC 567",
    airline: "Delta Airlines",
    agent_id: 1,
    status: "Pending",
    createdAt: "2024-02-06T13:14:55.000Z",
    updatedAt: "2024-02-06T13:14:55.000Z",
  },
  {
    id: 3,
    itinerary_id: 3,
    origin: "France",
    destination: "Germany",
    arrival_date_time: "Mon, 15 Nov 2023",
    depart_date_time: "Mon, 15 Nov 2023",
    flight_no: "XYZ 789",
    airline: "Lufthansa",
    agent_id: 1,
    status: "Active",
    createdAt: "2024-02-06T13:14:55.000Z",
    updatedAt: "2024-02-06T13:14:55.000Z",
  },
  {
    id: 4,
    itinerary_id: 4,
    origin: "UK",
    destination: "Australia",
    arrival_date_time: "Sun, 7 Feb 2024",
    depart_date_time: "Sun, 7 Feb 2024",
    flight_no: "EFG 123",
    airline: "British Airways",
    agent_id: 1,
    status: "Active",
    createdAt: "2024-02-06T13:14:55.000Z",
    updatedAt: "2024-02-06T13:14:55.000Z",
  },
  {
    id: 5,
    itinerary_id: 5,
    origin: "China",
    destination: "Japan",
    arrival_date_time: "Tue, 14 Mar 2023",
    depart_date_time: "Tue, 14 Mar 2023",
    flight_no: "HIJ 456",
    airline: "Air China",
    agent_id: 1,
    status: "Active",
    createdAt: "2024-02-06T13:14:55.000Z",
    updatedAt: "2024-02-06T13:14:55.000Z",
  },
  {
    id: 6,
    itinerary_id: 6,
    origin: "Brazil",
    destination: "Argentina",
    arrival_date_time: "Thu, 8 Jun 2023",
    depart_date_time: "Thu, 8 Jun 2023",
    flight_no: "KLM 789",
    airline: "KLM Royal Dutch Airlines",
    agent_id: 1,
    status: "Pending",
    createdAt: "2024-02-06T13:14:55.000Z",
    updatedAt: "2024-02-06T13:14:55.000Z",
  },
  {
    id: 7,
    itinerary_id: 7,
    origin: "Italy",
    destination: "Spain",
    arrival_date_time: "Sat, 29 Apr 2023",
    depart_date_time: "Sat, 29 Apr 2023",
    flight_no: "LMN 101",
    airline: "Iberia Airlines",
    agent_id: 1,
    status: "Active",
    createdAt: "2024-02-06T13:14:55.000Z",
    updatedAt: "2024-02-06T13:14:55.000Z",
  },
  {
    id: 8,
    itinerary_id: 8,
    origin: "Russia",
    destination: "Germany",
    arrival_date_time: "Sun, 16 Jul 2023",
    depart_date_time: "Sun, 16 Jul 2023",
    flight_no: "OPQ 212",
    airline: "Aeroflot",
    agent_id: 1,
    status: "Pending",
    createdAt: "2024-02-06T13:14:55.000Z",
    updatedAt: "2024-02-06T13:14:55.000Z",
  },
];
export const bookingDetailData = [
  {
    success: true,
    message: "Ticket details fetched successfully!",
    data: {
      bookingId: "OXEPGB",
      startDate: "2024-02-07",
      endDate: "2024-02-07",
      isTicketed: false,
      creationDetails: {
        creationUserSine: "AWS",
        creationDate: "2024-02-07",
        creationTime: "05:07",
        userWorkPcc: "J1DL",
        userHomePcc: "J1DL",
        primeHostId: "1S",
      },

      contactInfo: {
        emails: ["SUPPORT@FLYGO.COM"],

        phones: ["923105156939-B-1.1", "923105156939-H-2.1"],
      },

      travelers: [
        {
          givenName: "USMAN",
          surname: "QASIM",
          type: "ADULT",
          passengerCode: "ADT",
          nameAssociationId: "1",
          emails: ["NABEEL_ARSHAD901131@OUTLOOK.COM"],

          phones: [
            {
              number: "923105156939",
              label: "B",
            },
          ],

          identityDocuments: [
            {
              documentNumber: "DC987544687",
              documentType: "REFUGEE_REENTRY_PERMIT",
              expiryDate: "2024-01-07",
              issuingCountryCode: "ST",
              residenceCountryCode: "ST",
              givenName: "USMAN",
              surname: "QASIM",
              birthDate: "1998-01-05",
              gender: "MALE",
              isPrimaryDocumentHolder: false,
              itemId:
                "e2f532f81638b831275aac0802e31ef097df8e6d4b014dda151170728a4550eef8bc2b583bfe21b4fad372f2af8452da560be69c3dc14a23e35228b21835e5e1",
            },

            {
              documentType: "SECURE_FLIGHT_PASSENGER_DATA",
              givenName: "USMAN",
              surname: "QASIM",
              birthDate: "1998-01-05",
              gender: "MALE",
              itemId:
                "8de8712daf70a9b135bf293503da7dfad6c5c43ffba3778f100b154f57f42fcb7924c37f0b699fc5f16a12e6398d3ac001a05e86af9a98bff9f45c9c8b9f7b04",
            },
          ],
        },
      ],

      flights: [
        {
          itemId: "10",
          confirmationId: "OXEWYH",
          sourceType: "ATPCO",
          flightNumber: 512,
          airlineCode: "GF",
          airlineName: "GULF AIR",
          operatingFlightNumber: 512,
          operatingAirlineCode: "GF",
          operatingAirlineName: "GULF AIR",
          fromAirportCode: "BAH",
          toAirportCode: "DXB",
          departureDate: "2024-02-07",
          departureTime: "20:20:00",
          arrivalDate: "2024-02-07",
          arrivalTime: "22:35:00",
          arrivalTerminalName: "TERMINAL 1",
          arrivalGate: "1",
          numberOfSeats: 1,
          cabinTypeName: "ECONOMY",
          cabinTypeCode: "Y",
          aircraftTypeCode: "789",
          aircraftTypeName: "BOEING 787-9",
          bookingClass: "E",
          meals: [
            {
              code: "S",
              description: "Snack",
            },
          ],

          flightStatusCode: "HK",
          flightStatusName: "Confirmed",
          durationInMinutes: 75,
          distanceInMiles: 302,
          travelerIndices: [1],

          identityDocuments: [
            {
              itemId:
                "e2f532f81638b831275aac0802e31ef097df8e6d4b014dda151170728a4550eef8bc2b583bfe21b4fad372f2af8452da560be69c3dc14a23e35228b21835e5e1",
              status: "Confirmed",
            },

            {
              itemId:
                "8de8712daf70a9b135bf293503da7dfad6c5c43ffba3778f100b154f57f42fcb7924c37f0b699fc5f16a12e6398d3ac001a05e86af9a98bff9f45c9c8b9f7b04",
              status: "Confirmed",
            },
          ],
        },
      ],

      journeys: [
        {
          firstAirportCode: "BAH",
          departureDate: "2024-02-07",
          departureTime: "20:20",
          lastAirportCode: "DXB",
          numberOfFlights: 1,
        },
      ],

      fareRules: [
        {
          originAirportCode: "BAH",
          destinationAirportCode: "DXB",
          owningAirlineCode: "GF",
          passengerCode: "ADT",
          isRefundable: true,
          refundPenalties: [
            {
              applicability: "BEFORE_DEPARTURE",
              conditionsApply: false,
              penalty: {
                amount: "789.0",
                currencyCode: "SAR",
              },
            },
          ],

          isChangeable: true,
          exchangePenalties: [
            {
              applicability: "BEFORE_DEPARTURE",
              conditionsApply: false,
              penalty: {
                amount: "470.0",
                currencyCode: "SAR",
              },
            },
          ],
        },
      ],

      fareOffers: [
        {
          travelerIndices: [1],

          flights: [
            {
              itemId: "10",
            },
          ],

          cabinBaggageAllowance: {
            totalWeightInKilograms: 6,
          },

          checkedBaggageAllowance: {
            maximumPieces: 1,
            baggagePieces: [
              {
                maximumSizeInInches: 62,
                maximumSizeInCentimeters: 158,
                maximumWeightInPounds: 50,
                maximumWeightInKilograms: 23,
                numberOfPieces: 1,
              },
            ],
          },
        },
      ],

      fares: [
        {
          creationDetails: {
            creationUserSine: "AWS",
            creationDate: "2024-02-07",
            creationTime: "05:07",
            userWorkPcc: "J1DL",
            userHomePcc: "J1DL",
          },

          airlineCode: "GF",
          fareCalculationLine: "BAH GF DXB132.94NUC132.94END ROE0.3761",
          isNegotiatedFare: false,
          fareConstruction: [
            {
              fareBasisCode: "EDLIT1BH",
              baseRate: {
                amount: "132.94",
                currencyCode: "NUC",
              },

              isCurrentItinerary: true,
              checkedBaggageAllowance: {
                maximumPieces: 1,
              },
            },
          ],

          taxBreakdown: [
            {
              taxCode: "YQ",
              taxAmount: {
                amount: "220.00",
                currencyCode: "SAR",
              },
            },

            {
              taxCode: "YR",
              taxAmount: {
                amount: "87.00",
                currencyCode: "SAR",
              },
            },

            {
              taxCode: "BH",
              taxAmount: {
                amount: "70.00",
                currencyCode: "SAR",
              },
            },

            {
              taxCode: "HM",
              taxAmount: {
                amount: "5.00",
                currencyCode: "SAR",
              },
            },

            {
              taxCode: "ZR",
              taxAmount: {
                amount: "6.00",
                currencyCode: "SAR",
              },
            },
          ],

          totals: {
            subtotal: "500.00",
            taxes: "388.00",
            total: "888.00",
            currencyCode: "SAR",
          },

          pricingTypeCode: "S",
          pricingTypeName: "System",
          pricingStatusCode: "A",
          pricingStatusName: "Active",
          requestedTravelerType: "ADT",
          pricedTravelerType: "ADT",
          recordTypeCode: "PQ",
          recordTypeName: "Price Quote",
          recordId: "1",
        },
      ],

      allSegments: [
        {
          id: "10",
          type: "FLIGHT",
          text: "512",
          vendorCode: "GF",
          startDate: "2024-02-07",
          startTime: "20:20:00",
          startLocationCode: "BAH",
          endDate: "2024-02-07",
          endTime: "22:35:00",
          endLocationCode: "DXB",
        },
      ],

      payments: {
        flightTotals: [
          {
            subtotal: "500.00",
            taxes: "388.00",
            total: "888.00",
            currencyCode: "SAR",
          },
        ],
      },

      specialServices: [
        {
          travelerIndices: [1],

          code: "DOCS",
          name: "API-Passenger Travel Document",
          message: "/DB/05JAN1998/M/QASIM/USMAN",
          statusCode: "HK",
          statusName: "Confirmed",
        },

        {
          travelerIndices: [1],

          code: "DOCS",
          name: "API-Passenger Travel Document",
          message: "/T/ST/DC987544687/ST/05JAN1998/M/07JAN2024/QASIM/USMAN",
          statusCode: "HK",
          statusName: "Confirmed",
        },
      ],

      timestamp: "2024-02-07T11:09:08",
      bookingSignature:
        "ab29017d7a16c86280407ce7de18fd8a599601abd367f76a57406223f76b7d212dfe8810de0391c7ef69f573649887586a655dfe6d8f5b17b8df313a5548dd59",
      request: {
        confirmationId: "OXEPGB",
      },
    },
  },
];
