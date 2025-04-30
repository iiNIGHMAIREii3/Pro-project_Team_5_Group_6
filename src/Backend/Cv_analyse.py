import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# Chargement des données
df = pd.read_excel('finalresultmodel.xlsx')

# Discretize the 'rate' column into categorical bins (e.g., low, medium, high)
# Adjust bins as needed based on domain knowledge or data distribution
df['rate_category'] = pd.qcut(df['rate'], q=3, labels=['Low', 'Medium', 'High'])

# Sélection des colonnes pertinentes
# Excluding 'CV' for now due to its text-based nature; can add NLP later if needed
df = df[['Company', 'Job', 'rate_category']]

# Define features and target
X = df[['Company', 'Job']]
y = df['rate_category']

# Define preprocessing for categorical columns
categorical_features = ['Company', 'Job']
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

# Combine preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('cat', categorical_transformer, categorical_features)
    ])

# Create the pipeline
pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier(random_state=42))
])

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Fit the model
pipeline.fit(X_train, y_train)

# Predict on test set
y_pred = pipeline.predict(X_test)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nConfusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Perform cross-validation
cv_scores = cross_val_score(pipeline, X, y, cv=5)
print("\nCross-Validation Scores:", cv_scores)
print("Mean CV Score:", cv_scores.mean())