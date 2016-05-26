#!/bin/sh

# use like this:
#
#     TITLE="Harry Potter: Deathly Hallows" $AUTHOR="J.K. Rowling" ./scripts/books.sh
#

# curl --include --request "POST" "http://localhost:3000/books" \
#   --header "Content-Type: application/json" \
#   --data $'{
#     "book": {
#       "title": $TITLE,
#       "author": $AUTHOR
#     }
#   }'

  # Example with Brian
  curl --include --request "POST" "http://localhost:3000/books" \
    --header "Content-Type: application/json" \
    --data $'{
      "book": {
        "title": "Life of Brian",
        "author": "Brian"
      }
    }'

  # Example with variables
  # TITLE="MOBY DICK 2"
  # AUTHOR="BRIAN 2"
  # curl --include --request "POST" "http://localhost:3000/books" \
  #   --header "Content-Type: application/json" \
  #   --data $'{
  #     "book": {
  #       "title": $TITLE,
  #       "author": $AUTHOR
  #     }
  #   }'
