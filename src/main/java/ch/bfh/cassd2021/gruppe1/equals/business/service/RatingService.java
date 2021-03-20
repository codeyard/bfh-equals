package ch.bfh.cassd2021.gruppe1.equals.business.service;

import ch.bfh.cassd2021.gruppe1.equals.business.model.Rating;
import ch.bfh.cassd2021.gruppe1.equals.repository.RatingRepository;

/**
 * The RatingService class implements the service layer for ratings
 *
 * @author Igor Stojanovic, Sabina Löffel, Christophe Leupi, Raphael Gerber
 * @version 1.0
 */
public class RatingService {
    final RatingRepository ratingRepository;

    public RatingService() {
        ratingRepository = new RatingRepository();
    }

    /**
     * Updates the ratings
     * @param ratings a list of Ratings
     */
    public void updateRatings(Rating[] ratings) {
        ratingRepository.updateRatings(ratings);
    }

    /**
     * Inserts the ratings
     * @param ratings a list of Ratings
     */
    public void insertRatings(Rating[] ratings) {
        ratingRepository.insertRatings(ratings);
    }
}
