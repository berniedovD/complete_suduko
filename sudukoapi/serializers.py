from rest_framework import serializers
class PuzzleSerializer(serializers.Serializer):
    
 puzzleID = serializers.CharField(max_length=4)
 puzzleName = serializers.CharField(max_length=10)
 sudukoString = serializers.CharField(max_length=81)
 difficultyLevel = serializers.CharField(max_length=1)
 
  